import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {
  FetchData,
  exerciseOptions,
  youtubeSearchOptions,
} from "../utlis/fetchData";
import DetailCard from "../components/DetailCard";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import Loader from "../components/Loader";
const ExerciseDetail = () => {
  const [exerciseDetail, setExercisesDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDBURL = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchURl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const ExerciseDetailData = await FetchData(
        `${exerciseDBURL}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExercisesDetail(ExerciseDetailData);

      const YoutubeSearchData = await FetchData(
        `${youtubeSearchURl}/search?query=${ExerciseDetailData.name}`,
        youtubeSearchOptions
      );

      const YouTubeData = YoutubeSearchData.contents.filter(
        (item) => !item.video.title.toLowerCase().includes("music")
      );

      setExerciseVideos(YouTubeData);

      const targetMuscleExercisesData = await FetchData(
        `${exerciseDBURL}/exercises/target/${ExerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);
      const equipmentExercisesData = await FetchData(
        `${exerciseDBURL}/exercises/equipment/${ExerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equipmentExercisesData);
    };
    fetchExercisesData();

    window.scrollTo(0, -250);
  }, [id]);

  useEffect(() => {
    let timer = setTimeout(() => setLoaded(false), 4000);
    return () => {
      setLoaded(true);
      clearTimeout(timer);
    };
  }, [id]);

  return (
    <div>
      {loaded ? (
        <Loader />
      ) : (
        <Box>
          <DetailCard exerciseDetail={exerciseDetail} />
          <ExerciseVideos
            exerciseVideos={exerciseVideos}
            name={exerciseDetail.name}
          />
          <SimilarExercises
            targetMuscleExercises={targetMuscleExercises}
            equipmentExercises={equipmentExercises}
          />
        </Box>
      )}
    </div>
  );
};

export default ExerciseDetail;
