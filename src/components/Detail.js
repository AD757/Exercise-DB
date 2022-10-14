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
      <div className="content">
      <Heading>{name}</Heading>
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
  display: flex;
  justify-content: space-between;
  width: 600px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 2rem 3rem;
  .image {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    .muscleDetail {
      margin-top: 2rem;
      display: flex;
      gap: 1.5rem;
      align-items: center;
      div {
        width: 80px;
        height: 80px;
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
          width: 100%;
        }
      }
      p {
        font-size: 1rem;
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

      .muscleDetail {
        div {
          width: 60px;
          height: 60px;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
    gap: 2rem;
    width: 90%;

    .content {
      display: flex;
      flex-direction: column;
      align-content: left;
      justify-content: left;
      padding: 0 0.7rem;
      margin-bottom: 1.5rem;

      .muscleDetail {
        div {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
`;

const Heading = styled.text`
  font-size: 1.2rem;
  text-align: center;
  color: #000;
  font-weight: bold;
  text-transform: uppercase;

  @media screen and (min-width: 280px) and (max-width: 500px) {
    font-size: 1rem;
    text-align: left;
  }

`;

export default ExerciseDetail;
