import styled from "styled-components";

export const Heading = styled.h4`
  font-size: 50px;
  font-weight: 400;
  line-height: 50px;
  letter-spacing: -0.02em;
  @media only screen and (max-width: 568px) {
    font-size: 30px;
    line-height: 1;
  }
`;
export const Paragraph = styled.p`
  font-family: eudoxus sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: -0.02em;
`;

export const btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 22px 46px 24px;
  font-family: inherit;
  width: 236px;
  height: 64px;
  border-radius: 100px;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
  border: none;
  outline: none;
  box-shadow: none;
  cursor: pointer;
`;
