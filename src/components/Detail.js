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
        <h3 className="heading">{name}</h3>
        {ExtraDetails.map((item) => (
          <div key={item} className="muscleDetail">
            <div className="muscleImage">
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
  width: 50vh;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 2rem 3rem;
  gap: 7rem;
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

    .heading {
      margin-top: 2rem;
      font-size: 2rem;
      font-weight: bold;
      text-transform: capitalize;
    }

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
        font-size: 1.3rem;
        text-transform: capitalize;
        color: #191f2a;
      }
    }
  }

  @media screen and (min-width: 520px) and (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;

    .image {
      margin: auto 0;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      padding: 0 1rem;

      .heading {
        margin: 0;
      }

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
    padding: 0.5rem;
    gap: 2rem;

    .image {
      margin: auto auto;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      padding: 0 0.7rem;
      margin-bottom: 1.5rem;

      .heading {
        margin: 0;
        font-size: 1.6rem;
      }

      .muscleDetail {
        div {
          width: 50px;
          height: 50px;
        }
        p {
          font-size: 1.2rem;
        }
      }
    }
  }
`;
export default ExerciseDetail;
