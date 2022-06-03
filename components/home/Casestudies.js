import React from "react";
import styled from "styled-components";
import { btn, Heading } from "styles/globalstyle";
import Image from "next/image";
function Casestudies() {
  const Items = [
    {
      img: "pngs/woldie.png",
      title: "Woldie",
      desc: "Amet vel amet elit dui blandit quis duis bibendum. Elit massa, leo risus pellentesque integer ornare faucibus est eu. read more",
      read: "READ MORE",
    },
    {
      img: "pngs/edwin.png",
      title: "Edwin",
      desc: "Amet vel amet elit dui blandit quis duis bibendum. Elit massa, leo risus pellentesque integer ornare faucibus est eu. read more",
      read: "READ MORE",
    },
    {
      img: "pngs/function.png",
      title: "Function",
      desc: "Amet vel amet elit dui blandit quis duis bibendum. Elit massa, leo risus pellentesque integer ornare faucibus est eu. read more",
      read: "READ MORE",
    },
  ];
  return (
    <Wrapper>
      <HeroWrapper>
        <CaseWrapper>
          <DescWrapper>
            <Title>Case Studies</Title>
            <Desc>
              Case studies Elit eu odio interdum facilisis curabitur mauris
              phasellus vitae. Pretium fames vel tortor
            </Desc>
          </DescWrapper>

          <BtnWrapper>
            <Btn>Work Together</Btn>
          </BtnWrapper>
        </CaseWrapper>

        <CardWrapper>
          {Items.map((item, index) => (
            <Card key={index}>
              {" "}
              <Icon>
                <Image
                  src={`/${item.img}`}
                  width={405}
                  height={327}
                  alt="Woldie"
                />
              </Icon>
              <Head>{item.title}</Head>
              <Desc>{item.desc}</Desc>
              <ReadMore>{item.read}</ReadMore>
            </Card>
          ))}
        </CardWrapper>
      </HeroWrapper>
    </Wrapper>
  );
}

export default Casestudies;

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
  margin: 20px 0;
  font-size: 35px;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 50px 0;
  grid-gap: 20px;

  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;
const Card = styled.div`
  border-radius: 16px;
`;
const Icon = styled.div`
  border-radius: 16px;
`;
const Desc = styled.div``;
const ReadMore = styled.div`
  margin-top: 50px;
  border-bottom: 1px solid #fff;
  padding-bottom: 10px;
  width: max-content;
  cursor: pointer;
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
