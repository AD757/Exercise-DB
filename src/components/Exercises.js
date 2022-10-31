import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { FetchData, exerciseOptions } from "../utlis/fetchData";
import styled from "styled-components";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, bodyPart, setExercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ExercisePerPage = 12;
  const indexOfLastExercise = currentPage * ExercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - ExercisePerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  useEffect(() => {
    const fetchExerciseData = async () => {
      let ExerciseData = [];
      if (bodyPart === "all") {
        ExerciseData = await FetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        ExerciseData = await FetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(ExerciseData);
    };
    fetchExerciseData();
  }, [bodyPart, setExercises]);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1700, behavior: "smooth" });
  };

  return (
    <ExerciseContainer id="exercise">
      <h2>Search results</h2>
      <Card>
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} flg={false} />
        ))}
      </Card>

      <PaginationWrapper>
        {exercises.length > ExercisePerPage && (
          <Pagination
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / ExercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </PaginationWrapper>
    </ExerciseContainer>
  );
};

const ExerciseContainer = styled.div`
  margin: 7rem 3rem;
  h2 {
    font-size: 2.3rem;
    text-align: center;
    margin-bottom: 3rem;
    text-transform: capitalize;
  }

  @media screen and (min-width: 520px) and (max-width: 768px) {
    h2 {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 3rem;
      text-transform: capitalize;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 520px) {
    h2 {
      margin-top: 1rem;
      font-size: 1.3rem;
      text-align: center;
    }
  }
`;

const Card = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 3rem;

  @media screen and (min-width: 520px) and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    gap: 2rem;
  }

  @media screen and (min-width: 320px) and (max-width: 520px) {
    gap: 2rem;
  }
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6rem;
  font-size: 1.3rem;
  @media screen and (min-width: 320px) and (max-width: 520px) {
    font-size: 0.2rem;
    margin: auto auto;
    margin-top: 3rem;
  }
`;

export default Exercises;
