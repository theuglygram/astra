import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Heading } from "styles/globalstyle";
const OurServices = () => {
  const Items = [
    {
      icon: "",
      title: "Technology",
      desc: "Elit eu odio interdum facilisis curabitur mauris phasellus vitae. Pretium fames vel tortor et arcu, faucibus semper egestas amet. Venenatis arcu viverra feugiat vel libero",
      read: "READ MORE",
    },

    {
      icon: "",
      title: "Technology",
      desc: "Elit eu odio interdum facilisis curabitur mauris phasellus vitae. Pretium fames vel tortor et arcu, faucibus semper egestas amet. Venenatis arcu viverra feugiat vel libero",
      read: "READ MORE",
    },

    {
      icon: "",
      title: "Technology",
      desc: "Elit eu odio interdum facilisis curabitur mauris phasellus vitae. Pretium fames vel tortor et arcu, faucibus semper egestas amet. Venenatis arcu viverra feugiat vel libero",
      read: "READ MORE",
    },
  ];
  return (
    <Wrapper>
      <HeroWrapper>
        <Title>Our services</Title>

        <CardWrapper>
          {Items.map((item, index) => (
            <Card key={index}>
              <Icon>
                <Image src="/svgs/rocket.svg" width={50} height={50} alt="" />
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
};

export default OurServices;
const Wrapper = styled.div`
  background: #171717;
  padding: 80px 20px 4px;
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
  @media only screen and (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;
const Card = styled.div`
  padding: 35px;
  /* margin: 0 20px; */
  background: #282828;
  border-radius: 16px;
`;
const Icon = styled.div``;
const Desc = styled.div``;
const ReadMore = styled.div`
  margin-top: 80px;
  border-bottom: 1px solid #fff;
  padding-bottom: 10px;
  width: max-content;
  cursor: pointer;
`;
