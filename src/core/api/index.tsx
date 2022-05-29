import axios from "axios";
import { endpoints } from "utils/constants";
import { GetShowsResponse } from "./types";

const SERVICE_URL = "https://api.tvmaze.com"

export const apiCall = axios.create({
    baseURL: SERVICE_URL,
});

export const getShows =  (keyword:string) => {
  return apiCall.get<GetShowsResponse[]>(endpoints.shows.find(keyword)).then((response) => response.data);
};