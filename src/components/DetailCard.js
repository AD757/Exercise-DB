import React from "react";
import styled from "styled-components";
import TargetImage from "../assets/images/target.png";
import EquipmentImg from "../assets/images/equipment.png";
import MuscleTarget from "../assets/images/muscleTarget.png";

const ExerciseDetail = ({ exerciseDetail }) => {
  const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;
  const ExtraDetails = [
    {
      icon: MuscleTarget,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImg,
      name: equipment,
    },
  ];
  return (
    <DetailCard>
      <div className="image">
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      </div>
      <Heading>{name}</Heading>
      <div className="content">
        {ExtraDetails.map((item) => (
          <div key={item} className="muscleDetail">
            <div className="image">
              <img src={item.icon} alt={item.name} />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </DetailCard>
  );
};

const DetailCard = styled.div`
  margin: 20px auto;
  flex-direction: row;
  align-items: center;
  width: 350px;

  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 2rem;
  gap: 2rem;
  .image {
    img {
      width: 80%;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    padding: 0 1rem;

    .muscleDetail {
      margin-top: 1rem;
      display: flex;
      gap: 10px;
      align-items: center;
      div {
        margin-left: 10px;
        width: 40px;
        height: 40px;
        background-color: #fafafa;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        padding: 1rem;
        &:hover {
          transform: scale(1.04);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
        img {
          width: 30px;
        }
      }
      p {
        font-size: 15px;
        text-align: center;
        text-transform: capitalize;
        color: #191f2a;
      }
    }
  }

  @media screen and (min-width: 520px) and (max-width: 768px) {
    padding: 2rem;
    gap: 2rem;
    .content {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      padding: 0 1rem;
    }
  }
`;

const Heading = styled.text`
  font-size: 1rem;
  text-align: center;
  color: #000;
  font-weight: bold;
  text-transform: uppercase;

  @media screen and (min-width: 280px) and (max-width: 500px) {
    text-align: left;
  }
`;

export default ExerciseDetail;
