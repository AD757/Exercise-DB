import React from "react";
import styled from "styled-components";

const BodyPart = ({ item, img, setBodyPart, bodyPart }) => {
  return (
    <Card
      type="button"
      style={
        bodyPart === item
          ? {
              border: "2px solid #E01E5A",
            }
          : { border: "none" }
      }
      onClick={() => {
        setBodyPart(item);

        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <div className="image">
        <img src={img} alt="arms.png" loading="lazy" />
      </div>
      <h2>{item}</h2>
    </Card>
  );
};

const Card = styled.div`
  margin: auto auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: "#fafafa";
  width: 250px;
  height: 300px;
  justify-content: center;
  border-radius: 9px;
  padding: 1rem 2rem;
  align-items: center;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  &:hover {
    transform: scale(1.04);
  }
  h2 {
    text-transform: capitalize;
  }
  .image {
    width: 80%;

    img {
      width: 100%;
      opacity: 0.9;
    }
  }
  @media screen and (min-width: 520px) and (max-width: 768px) {
    width: 200px;
    height: 250px;
  }
  @media screen and (min-width: 280px) and (max-width: 500px) {
    width: 170px;
    height: 250px;
  }
`;

export default BodyPart;
