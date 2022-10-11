import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/icons/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", (e) => setIsNavOpen(false));

  return (
    <Nav>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
        <h2>Exercise DB</h2>
      </Link>
      <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={() => setIsNavOpen(false)} />
        ) : (
          <GiHamburgerMenu
            onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
          />
        )}
      </div>
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <Link to="/" className="tag">
          Home
        </Link>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #171819;
  box-shadow: 0 2px 8px #171819;
  .logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    img {
      width: 65px;
      height: 65px;
      margin: 0 20px;
    }
    h2 {
      color: #fff;
    }
  }
  .toggle {
    display: none;
  }
  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .tag {
      text-transform: capitalize;
      text-decoration: none;
      margin-right: 2rem;
      color: #fff;
      font-size: 1.2rem;
      transition: all 0.3 ease-in-out;
      cursor: pointer;
      &:hover {
        color: #e01e5a;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    padding: 1rem 1rem 0.5rem 1rem;
    .logo {
      img {
        margin: 0 10px;
      }
      h2 {
        font-size: 1.3rem;
      }
    }
    .toggle {
      display: block;
      z-index: 1000;
      svg {
        color: #fff;
        font-size: 2rem;
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      align-items: center;
      background-color: #000;
      visibility: hidden;
      z-index: 100;
      .tag {
        background-color: #e01e5a;
        display: flex;
        justify-content: center;
        align-self: center;
        color: #fff;
        padding: 1rem 2rem;
        border-radius: 4px;
        width: 200px;
        font-weight: 600;
        transition: all 0.2s ease-in-out;
        margin: 0 auto;

        &:hover {
          background-color: #fff !important;
          color: #e01e5a;
        }
      }
    }
  }
`;

export default Navbar;
