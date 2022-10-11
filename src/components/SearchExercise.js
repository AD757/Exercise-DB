import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HorizontalScrollbar from "./HorizontalScrollbar";
import { FetchData, exerciseOptions } from "../utlis/fetchData";

const SearchExercise = ({
  search,
  setSearch,
  setExercises,
  bodyPart,
  setBodyPart,
}) => {
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await FetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExerciseData();
  }, []);

  const searchHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const submitHandler = async () => {
    if (search) {
      const exercisesData = await FetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchExercises);
      window.scrollTo({
        top: 1700,
        left: 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <Section id="search">
      <div className="container">
        <div className="heading">
          <h2 className="title">Find relevant exercises</h2>
        </div>
        <div className="input">
          <input
            type="text"
            className="inputField"
            placeholder="Search Exercise..."
            value={search}
            onChange={searchHandler}
          />
          <Button onClick={submitHandler}>Search</Button>
        </div>
        <div id="ExploreExercise" className="HorizontalScrollbar">
          <HorizontalScrollbar
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  margin-top: 5rem;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    .heading {
      h2 {
        font-size: 3.5rem;
        text-align: center;
        text-transform: capitalize;
      }
    }

    .input {
      display: flex;
      width: 50%;
      justify-content: space-evenly;
      align-content: center;

      input {
        position: relative;
        left: 0;
        width: 70%;
        background-color: #fff;
        color: #000;
        font-size: 1rem;
        padding: 0.5rem 7rem 0.5rem 1rem;
        border-radius: 24px;
        border: 2px solid #e01e5a;
        outline: none;
        ::placeholder {
          color: #000;
          opacity: 0.5;
        }
      }
    }
    .HorizontalScrollbar {
      margin-top: 4rem;
      width: 90vw;
    }
  }
  @media screen and (min-width: 520px) and (max-width: 768px) {
    margin-top: 3.5rem;
    .container {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      gap: 3rem;
      .heading {
        h2 {
          font-size: 2rem;
          text-align: center;
          text-transform: capitalize;
        }
      }

      .input {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 55vw;
        justify-content: space-evenly;
        align-content: center;

        input {
          left: 0px;
          width: 100%;
          font-size: 1.2rem;
          padding: 0.5rem 1rem;
        }
      }
      .HorizontalScrollbar {
        margin-top: 2rem;
        width: 90vw;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 500px) {
    margin-top: 2rem;
    .container {
      .heading {
        h2 {
          font-size: 1.5rem;
        }
      }
      .input {
        display: flex;
        width: 70vw;
        justify-content: space-evenly;

        input {
          left: 0px;
          width: 100%;
          font-size: 1.2rem;
          padding: 0.5rem 1rem;
        }
      }
    }
  }
`;

const Button = styled.button`
  outline: none;
  border: none;
  padding: 0.5rem 1.2rem;
  background-color: #e01e5a;
  border-radius: 24px;
  color: #fff;
  text-decoration: none;
  width: max-content;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.2rem;
  z-index: 10;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #e01e5a;
    border: 1px solid #000;
  }
  @media screen and (min-width: 520px) and (max-width: 768px) {
    margin-left: 8px;
  }

  @media screen and (min-width: 280px) and (max-width: 768px) {
    margin-left: 8px;
    padding: 0.5rem 1rem;
    align-self: center;
  }
`;

export default SearchExercise;
