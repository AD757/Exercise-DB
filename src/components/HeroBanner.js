import React from "react";
import styled from "styled-components";
import Hero from "../assets/images/hero.png";
import Button from "./Button";

const HeroBanner = () => {
  return (
    <Section>
      <div className="overlay">
        <div className="container">
          <div className="content">
            <h1 className="title">Welcome to Exercise DB!</h1>
            <p>
              Access over 1300 quality-assured exercises with animated
              demonstrations.
            </p>
            <Button text={`Explore Exercises`} target="ExploreExercise" />
          </div>
          <div className="image">
            <img src={Hero} alt="hero.png" />
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  background-color: #191f2a;
  padding-bottom: 8rem;
  background-image: ${`url(${Hero})`};
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: max-content;
  .container {
    padding: 2rem 3rem;
    .content {
      margin-top: 2.5rem;
      width: 50%;
      text-transform: capitalize;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h1 {
        color: #fff;
        font-size: 4rem;
        margin-bottom: 2.5rem;
      }
      p {
        margin-bottom: 2rem;
        font-size: 1.4rem;
        color: #fff;
      }
    }
    .image {
      display: none;
      width: 80%;
      img {
        box-shadow: rgba(25, 31, 42, 1) 0px 3px 6px,
          rgba(25, 31, 42, 1) 0px 3px 6px;
        width: 100%;
        height: max-content;
      }
    }
  }
  @media screen and (min-width: 520px) and (max-width: 768px) {
    .overlay {
      .container {
        .content {
          width: 100%;
          h1 {
            color: #fff;
            font-size: 2.8rem;
            margin-bottom: 1.5rem;
          }
          p {
            font-size: 2rem;
            margin-bottom: 2rem;
          }
          .description {
            font-size: 1.4rem;
            color: #a0a3a8;
          }
        }
        .image {
          display: none;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 520px) {
    padding-bottom: 0px;
    .overlay {
      background: rgba(50, 70, 80, 0.6);
      padding-bottom: 2.5rem;
      .container {
        flex-direction: column;
        padding: 2rem 1.5rem;

        .content {
          width: 100%;
          order: 1;
          margin-top: 2.5rem;
          h1 {
            color: #fff;
            font-size: 2.7rem;
            margin-bottom: 1.5rem;
          }
          p {
            font-size: 1.6rem;
          }
          .description {
            font-size: 1.4rem;
            color: #a0a3a8;
          }
        }
        .image {
          display: none;
        }
      }
    }
  }
`;

export default HeroBanner;
