import React from "react";
import styled from "styled-components";
import { Heading } from "styles/globalstyle";
import Image from "next/image";

function BlogHero() {
  return (
    <Wrapper>
      <HeroWrapper>
        <Title>blog</Title>

        <HeadWrapper>
          <Head> Our articles</Head>
          <Type>
            <Links>Design</Links>
            <Links>development</Links>
            <Links>branding</Links>
            <Links>marketing</Links>
            <Links>business</Links>
          </Type>
        </HeadWrapper>

        <BlogWrapper>
          <BlogPost>
            <ImageWrapper>
              <Image
                src="/pngs/article.png"
                width={405}
                height={201}
                alt="article"
              />
            </ImageWrapper>
            <Desc>
              Nisl imperdiet morbi bibendum lorem erat. Feugiat commodo
            </Desc>
            <Date>21 November 2020</Date>
            <Read>Read More</Read>
          </BlogPost>
          <BlogPost>
            <ImageWrapper>
              <Image
                src="/pngs/article.png"
                width={405}
                height={201}
                alt="article"
              />
            </ImageWrapper>
            <Desc>
              Nisl imperdiet morbi bibendum lorem erat. Feugiat commodo
            </Desc>
            <Date>21 November 2020</Date>
            <Read>Read More</Read>
          </BlogPost>
          <BlogPost>
            <ImageWrapper>
              <Image
                src="/pngs/article.png"
                width={405}
                height={201}
                alt="article"
              />
            </ImageWrapper>
            <Desc>
              Nisl imperdiet morbi bibendum lorem erat. Feugiat commodo
            </Desc>
            <Date>21 November 2020</Date>
            <Read>Read More</Read>
          </BlogPost>
          <BlogPost>
            <ImageWrapper>
              <Image
                src="/pngs/article.png"
                width={405}
                height={201}
                alt="article"
              />
            </ImageWrapper>
            <Desc>
              Nisl imperdiet morbi bibendum lorem erat. Feugiat commodo
            </Desc>
            <Date>21 November 2020</Date>
            <Read>Read More</Read>
          </BlogPost>
          <BlogPost>
            <ImageWrapper>
              <Image
                src="/pngs/article.png"
                width={405}
                height={201}
                alt="article"
              />
            </ImageWrapper>
            <Desc>
              Nisl imperdiet morbi bibendum lorem erat. Feugiat commodo
            </Desc>
            <Date>21 November 2020</Date>
            <Read>Read More</Read>
          </BlogPost>
          <BlogPost>
            <ImageWrapper>
              <Image
                src="/pngs/article.png"
                width={405}
                height={201}
                alt="article"
              />
            </ImageWrapper>
            <Desc>
              Nisl imperdiet morbi bibendum lorem erat. Feugiat commodo
            </Desc>
            <Date>21 November 2020</Date>
            <Read>Read More</Read>
          </BlogPost>
        </BlogWrapper>

        <ControlBtn>
          <Btn>Prev</Btn> <Btn>Next</Btn>
        </ControlBtn>
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

export default BlogHero;

const Wrapper = styled.div`
  position: relative;
  padding: 0 20px;
  overflow-x: hidden;
`;

const HeroWrapper = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto 50px;
  margin-top: 30px;
`;
const SpiralWrap = styled.div`
  position: absolute;
  top: 180px;
  right: -70px;
  span span img {
    z-index: -1;
  }
  opacity: 0.6;
`;

const Title = styled.p`
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 10px;
`;
const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Head = styled(Heading)``;
const Type = styled.li`
  list-style: none;
  display: flex;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Links = styled.div`
  align-items: center;
  padding: 12px 24px;
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 12px;
  margin: 0 15px;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    background: #5ce115;
    color: #000;
  }
`;

const BlogWrapper = styled.div`
  margin: 50px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  align-items: center;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 668px) {
    grid-template-columns: 1fr;
  }
`;
const BlogPost = styled.div`
  margin: 20px 0;
  z-index: 1;
`;
const ImageWrapper = styled.div`
  border-radius: 16px;
`;
const Desc = styled.h3`
  font-size: 32px;
  font-weight: 400;
  line-height: 32px;
  margin: 15px 0;
`;
const Date = styled.p`
  font-family: Eudoxus Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: -0.02em;
  margin: 15px 0;
`;
const Read = styled.h4`
  padding-bottom: 10px;
  border-bottom: 1px solid #fff;
  text-transform: uppercase;
  width: max-content;
  cursor: pointer;
`;

const ControlBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Btn = styled.button`
  width: 134px;
  height: 64px;
  background: #3a3a3a;
  border-radius: 100px;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: -0.02em;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  border: none;
  margin: 0 10px;
`;
