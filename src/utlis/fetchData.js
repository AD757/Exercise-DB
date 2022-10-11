import { API_KEY } from "./config";

export const exerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": API_KEY,
  },
};

export const youtubeSearchOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": API_KEY,
  },
};

export const FetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
