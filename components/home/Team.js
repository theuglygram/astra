import React from "react";
import styled from "styled-components";
import { btn, Heading } from "styles/globalstyle";
import Image from "next/image";

function Team() {
  const Items = [
    {
      img: "pngs/micky.png",
      title: "Micky Jones",
      read: "founder",
    },
    {
      img: "pngs/mick.png",
      title: "Edwin Klein",
      read: "designer",
    },
    {
      img: "pngs/mika.png",
      title: "Mika Steve",
      read: "developer",
    },
    {
      img: "pngs/jones.png",
      title: "Jude Stones",
      read: "Content Writer",
    },
  ];
  return (
    <>
      {" "}
      <Wrapper>
        <HeroWrapper>
          <CaseWrapper>
            <Title>Our team</Title>
          </CaseWrapper>

          <CardWrapper>
            {Items.map((item, index) => (
              <Card key={index}>
                <Icon>
                  <Image
                    src={`/${item.img}`}
                    width={405}
                    height={327}
                    alt="Woldie"
                  />
                </Icon>
                <Head>{item.title}</Head>
                <ReadMore>{item.read}</ReadMore>
              </Card>
            ))}
          </CardWrapper>
        </HeroWrapper>
      </Wrapper>
    </>
  );
}

export default Team;

const Wrapper = styled.div`
  background: #000;
  padding: 80px 20px;
`;
const HeroWrapper = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled(Heading)`
  margin: 20px 0;
`;
const Head = styled(Heading)`
  margin-top: 20px;
  font-size: 35px;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 50px 0;
  grid-gap: 20px;

  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-gap: 50px;
  }
`;
const Card = styled.div`
  border-radius: 16px;
`;
const Icon = styled.div`
  border-radius: 16px;
`;
const Desc = styled.div``;
const ReadMore = styled.h4`
  text-transform: uppercase;
`;

const CaseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
const DescWrapper = styled.div`
  max-width: 450px;
  width: 100%;
`;
const BtnWrapper = styled.div`
  @media only screen and (max-width: 500px) {
    margin: 20px 0;
  }
`;
const Btn = styled(btn)`
  background: #5ce115;
`;
