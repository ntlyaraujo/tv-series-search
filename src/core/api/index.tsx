import axios from "axios";
import { endpoints } from "utils/constants";
import { Show, ShowDetails } from "core/types";

const SERVICE_URL = "https://api.tvmaze.com";

export const apiCall = axios.create({
  baseURL: SERVICE_URL,
});

export const getShows = (keyword: string) => {
  return apiCall
    .get<Show[]>(endpoints.shows.find(keyword))
    .then((response) => response.data);
};
export const getShowById = (id: number) => {
  return apiCall
    .get<ShowDetails>(endpoints.shows.findById(id))
    .then((response) => response.data);
};
