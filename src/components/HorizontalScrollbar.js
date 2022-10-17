import React, { useRef } from "react";
import styled from "styled-components";
import BodyPart from "./BodyPart";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import {
  FullBody,
  LowerBody,
  Calf,
  LowerArms,
  Shoulders,
  Neck,
  Arms,
  Back,
  Chest,
  Cardio,
  Core,
} from "../assets/icons";

const HomeHorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  const BodyPartImage = [
    {
      text: "1",
      img: FullBody,
    },
    {
      text: "2",
      img: Back,
    },
    {
      text: "3",
      img: Cardio,
    },
    {
      text: "4",
      img: Chest,
    },
    {
      text: "5",
      img: LowerArms,
    },
    {
      text: "6",
      img: Calf,
    },
    {
      text: "7",
      img: Neck,
    },
    {
      text: "8",
      img: Shoulders,
    },
    {
      text: "9",
      img: Arms,
    },
    {
      text: "10",
      img: LowerBody,
    },
    {
      text: "11",
      img: Core,
    },
  ];

  for (let i = 0; i < 11; i++) {
    BodyPartImage[i].text = data[i];
  }

  const ref = useRef(null);

  const LeftHandler = () => {
    ref.current.scrollLeft -= 200;
  };
  const RightHandler = () => {
    ref.current.scrollLeft += 200;
  };

  return (
    <Wrapper>
      <Button onClick={LeftHandler}>
        <KeyboardArrowLeftIcon />
      </Button>
      <ScrollMenu ref={ref}>
        {BodyPartImage.map((item) => (
          <Scroll
            key={item.id || item.text}
            itemId={item.id || item.text}
            title={item.id || item.text}
          >
            <BodyPart
              item={item.text}
              img={item.img}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          </Scroll>
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
  @media screen and (min-width: 280px) and (max-width: 500px) {
    gap: 1rem;
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

const Scroll = styled.div`
  display: flex;
  padding: 1rem 1rem;
  align-items: center;
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
  @media screen and (min-width: 280px) and (max-width: 768px) {
    padding: 0.6rem;
  }
  @media screen and (min-width: 280px) and (max-width: 375px) {
    padding: 0.3rem;
  }
`;

export default HomeHorizontalScrollbar;
