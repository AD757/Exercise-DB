import React from "react";
import styled from "styled-components";
import logo from "../assets/icons/logo.png";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer">
        <img src={logo} alt="logo" />
        <h2>Exercise DB</h2>
      </div>
      <div className="creator">Powered by Rapid API</div>
    </FooterWrapper>
  );
};
const FooterWrapper = styled.div`
  background-color: #171819;
  display: flex;
  padding: 1.5rem;
  gap: 1rem;
  justify-content: space-around;
  align-items: center;
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    img {
      width: 65px;
      height: 65px;
    }
    h2 {
      color: #fff;
      font-size: 1.2rem;
    }
  }
  .creator {
    color: #fff;
    font-size: 1.2rem;
    a {
      text-decoration: none;
      color: #e01e5a;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 768px) {
    flex-direction: column;
    padding: 1.2rem;
    .footer {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      img {
        width: 40px;
        height: 40px;
      }
      h2 {
        color: #fff;
        font-size: 1.2rem;
      }
    }
    .creator {
      color: #fff;
      font-size: 1rem;
      a {
        text-decoration: none;
        color: #e01e5a;
      }
    }
  }
`;
export default Footer;
