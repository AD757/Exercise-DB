import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      className="exercise_card"
      to={`/exercise/${exercise.id}`}
    >
      <ExerciseCardWrapper>
        <Heading>{exercise.name}</Heading>
        <ImageContainer>
          <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        </ImageContainer>
        <div className="content">
          <span className="btn">{exercise.bodyPart}</span>
          <span className="btn btn2">{exercise.target}</span>
        </div>
      </ExerciseCardWrapper>
    </Link>
  );
};

const Heading = styled.text`
  margin-top: 12px;
  padding: 12px;
  font-size: 1rem;
  text-align: center;
  color: #000;
  font-weight: bold;
  text-transform: uppercase;
`;

const ExerciseCardWrapper = styled.div`
  width: 320px;
  height: 350px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 10px;
  transition: 0.5s;
  margin: 10px 40px;
  &:hover {
    transform: scale(1.04);
  }

  .content {
    display: flex;
    justify-content: space-around;
    gap: 1rem;
    .btn {
      margin-bottom: 12px;
      padding: 8px;
      border: none;
      background-color: #e01e5a;
      text-transform: capitalize;
      border-radius: 6px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      &:hover {
        color: #e01e5a;
        background-color: #fafafa;
      }
    }
    .btn2 {
      color: #e01e5a;
      background-color: #fafafa;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      &:hover {
        background-color: #e01e5a;
        color: #fff;
      }
    }
  }

  @media screen and (min-width: 520px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .content {
      font-size: 0.9rem;
      .btn {
        font-size: 95%;
      }
    }
  }
  @media screen and (min-width: 320px) and (max-width: 520px) {
    align-self: center;
    .content {
      font-size: 0.9rem;
      .btn {
        font-size: 95%;
        padding: 0.5rem 1rem;
      }
    }
  }
`;

const ImageContainer = styled.text`
  width: 200px;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;

export default ExerciseCard;
