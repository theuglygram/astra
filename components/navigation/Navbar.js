import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { btn } from "styles/globalstyle";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const toggleHamburger = () => {
    setOpenNav(!openNav);
  };
  return (
    <>
      <NavWrapper>
        <NavContent>
          <LogoHolder>
            <Link href="/">
              <a>
                <Image
                  src="/svgs/Logo.svg"
                  width={108}
                  height={30}
                  alt="logo"
                />
              </a>
            </Link>
          </LogoHolder>
          <LinkHolder toggle={openNav}>
            <Links>
              <Link href="/about">
                <a>About</a>
              </Link>
            </Links>
            <Links>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </Links>
            <Links>
              <Link href="/careers">
                <a>Careers</a>
              </Link>
            </Links>
            <Links>
              <Link href="/casestudy">
                <a>Case Study</a>
              </Link>
            </Links>

            <Purchase>Purchase</Purchase>
          </LinkHolder>
          <HamMenu onClick={toggleHamburger}>
            <Ham1 toggle={openNav}></Ham1>
            <Ham2 toggle={openNav}></Ham2>
          </HamMenu>
        </NavContent>
      </NavWrapper>
    </>
  );
}

export default Navbar;

const NavWrapper = styled.div`
  position: relative;
`;
const NavContent = styled.div`
  height: 64px;
  padding: 0 20px;
  max-width: 1300px;
  width: 100%;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    margin: 0 auto;
    padding: 50px 20px;
  }
`;

const HamMenu = styled.div`
  border: 1px solid #fff;
  border-radius: 50%;
  padding: 14px 5px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    z-index: 999;
  }
`;
const Ham1 = styled.div`
  width: 25px;
  height: 1px;
  margin: 4px;
  background: #fff;
  transform: ${(props) =>
    props.toggle ? "rotate(40deg) translate(3px,2px) " : "rotate(0)"};
`;
const Ham2 = styled.div`
  width: 25px;
  height: 1px;
  margin: 4px;
  background: #fff;
  transform: ${(props) =>
    props.toggle ? "rotate(-40deg) translate(2px,0px) " : "rotate(0deg)"};
`;
const LogoHolder = styled.div`
  z-index: 999;
`;
const LinkHolder = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  width: 700px;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    display: ${(props) => (props.toggle ? "flex" : "none")};
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    background: #000;
    z-index: 5;
    flex-direction: column;
    width: 100%;
    padding: 60px 0;
    justify-content: space-around;
  }
`;
const Links = styled.li`
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;
  cursor: pointer;
`;
const Purchase = styled(btn)`
  background: #5ce115;
  font-size: 18px;
  font-weight: 400;
`;
