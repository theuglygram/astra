import React from "react";
import styled from "styled-components";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Testimonials() {
  return (
    <Wrapper>
      <Top>
        <Image src="/svgs/topellipse.svg" width={150} height={150} alt="arr" />
      </Top>
      <Bottom>
        <Image
          src="/svgs/bottomellipse.svg"
          width={150}
          height={150}
          alt="arr"
        />
      </Bottom>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
      >
        <div>
          <div className="myCarousel">
            <p>
              It&apos;s freeing to be able to catch up on customized news and
              not be distracted by a social media element on the same site
            </p>
            <Image
              src="/pngs/test.png"
              width={50}
              height={50}
              alt="boy testimony"
            />
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
          </div>
        </div>

        <div>
          <div className="myCarousel">
            <p>
              It&apos;s freeing to be able to catch up on customized news and
              not be distracted by a social media element on the same site
            </p>
            <Image
              src="/pngs/test.png"
              width={50}
              height={50}
              alt="boy testimony"
            />
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
          </div>
        </div>

        <div>
          <div className="myCarousel">
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I&apos;m on the go!
            </p>
            <Image
              src="/pngs/test.png"
              width={50}
              height={50}
              alt="boy testimony"
            />
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
          </div>
        </div>
      </Carousel>
    </Wrapper>
  );
}

export default Testimonials;

const Wrapper = styled.div`
  background: #171717;
  height: 100%;
  position: relative;
  padding: 50px 0; ;
`;
const Top = styled.div`
  opacity: 0.2;
  position: absolute;
  right: 0;
  top: 0;
`;
const Bottom = styled.div`
  opacity: 0.2;
  position: absolute;
  left: 0;
  bottom: 0;
`;
