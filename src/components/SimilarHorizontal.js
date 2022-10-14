import React, { useRef } from "react";
import styled from "styled-components";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ExerciseCard from "./ExerciseCard";

const SimilarHorizontal = ({ targetMuscleExercises }) => {
  const ref = useRef(null);
  const LeftHandler = () => {
    ref.current.scrollLeft -= 500;
  };
  const RightHandler = () => {
    ref.current.scrollLeft += 500;
  };

  return (
    <Wrapper>
      <Button onClick={LeftHandler}>
        <KeyboardArrowLeftIcon />
      </Button>
      <ScrollMenu ref={ref}>
        {targetMuscleExercises.map((item) => (
          <div className="child" key={item}>
            <ExerciseCard exercise={item} flg={true} />
          </div>
        ))}
      </ScrollMenu>
      <Button onClick={RightHandler}>
        <KeyboardArrowRightIcon />
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 2.5rem;
  @media screen and (min-width: 426px) and (max-width: 768px) {
    gap: 1.5rem;
  }
`;
const ScrollMenu = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  margin: auto auto;
  border: none;
  padding: 1rem;
  color: #e01e5a;
  border-radius: 50%;
  background-color: #fafafa;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  align-items: center;
  width: max-content;
  height: max-content;

  &:hover {
    transform: scale(1.04);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
  cursor: pointer;
  @media screen and (min-width: 520px) and (max-width: 768px) {
    padding: 0.6rem;
  }
  @media screen and (min-width: 280px) and (max-width: 500px) {
    padding: 0.3rem;
  }
`;

export default SimilarHorizontal;
