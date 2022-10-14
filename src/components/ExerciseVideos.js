import React, { useRef } from "react";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import styled from "styled-components";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  const ref = useRef(null);

  const LeftHandler = () => {
    ref.current.scrollLeft -= 300;
  };
  const RightHandler = () => {
    ref.current.scrollLeft += 300;
  };
  return (
    <Container>
      <h2 className="title">
        Video demonstration on
        <strong style={{ color: "#E01E5A" }}> {name}</strong>
      </h2>
      <div class="box">
        <Button onClick={LeftHandler}>
          <KeyboardArrowLeftIcon />
        </Button>
        <ScrollMenu ref={ref}>
          {exerciseVideos.map((item, index) => (
            <iframe
              className="video_responsive"
              src={`https://www.youtube.com/embed/${item.video.videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              loading="lazy"
            />
          ))}
        </ScrollMenu>
        <Button onClick={RightHandler}>
          <KeyboardArrowRightIcon />
        </Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .box {
    width: 90vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  @media screen and (min-width: 520px) and (max-width: 768px) {
    .title {
      font-size: 1.5rem;
      margin: 0 2rem;
      margin-bottom: 2rem;
    }
    .box {
      width: 95vw;
      gap: 1.2rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 500px) {
    .title {
      font-size: 1.3rem;
      margin: 0 1rem;
      margin-bottom: 2rem;
    }
    .box {
      width: 90vw;
      gap: 1.2rem;
    }
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
  gap: 2rem;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
  .video_responsive {
    min-width: 400px;
    height: 220px;
  }
  @media screen and (min-width: 520px) and (max-width: 768px) {
    gap: 1.5rem;
    .video_responsive {
      min-width: 55vw;
      height: 220px;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 500px) {
    gap: 1.5rem;

    .video_responsive {
      min-width: 75vw;
      height: 220px;
    }
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
export default ExerciseVideos;
