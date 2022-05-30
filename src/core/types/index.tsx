export enum SHOW_ACTION_TYPES {
  REQUEST_SHOWS_PENDING = "show/REQUEST_SHOWS_PENDING",
  REQUEST_SHOWS_SUCCESS = "show/REQUEST_SHOWS_SUCCESS",
  REQUEST_SHOWS_ERROR = "show/REQUEST_SHOWS_ERROR",

  REQUEST_SHOW_DETAILS_PENDING = "show/REQUEST_SHOW_DETAILS_PENDING",
  REQUEST_SHOW_DETAILS_SUCCESS = "show/REQUEST_SHOW_DETAILS_SUCCESS",
  REQUEST_SHOW_DETAILS_ERROR = "show/REQUEST_SHOW_DETAILS_ERROR",
}
// Mocks
type Schedule = {
  time: string;
  days: string[];
};
type Rating = {
  average: number;
};

type Country = {
  name: number;
  code: number;
  timezone: number;
};

type Network = {
  id: number;
  name: string;
  country: Country | null;
  officialSite: string;
};
type Externals = {
  tvrage: number;
  thetvdb: number;
  imdb: string;
};
type Image = {
  medium: string;
  original: string;
};

type Href = {
  href: string;
};
type _Links = {
  self: Href | null;
  previousepisode: Href | null;
  nextepisode: Href | null;
};
export type Show = {
  score?: number;
  show: {
    id: number;
    url: string | null;
    name: string | null;
    type: string | null;
    language: string | null;
    genres: string[];
    status: string | null;
    runtime: number | null;
    averageRuntime: number | null;
    premiered: string | null;
    ended: string | null;
    officialSite: string | null;
    schedule: Schedule | null;
    rating: Rating | null;
    weight: number | null;
    network: Network | null;
    webChannel: string | null;
    dvdCountry: string | null;
    externals: Externals | null;
    image: Image | null;
    summary: string | null;
    updated: string | null;
    _links: _Links | null
  };
};

export type ShowDetails ={
  id: number;
  url: string | null;
  name: string | null;
  type: string | null;
  language: string | null;
  genres: string[];
  status: string | null;
  runtime: number | null;
  averageRuntime: number | null;
  premiered: string | null;
  ended: string | null;
  officialSite: string | null;
  schedule: Schedule | null;
  rating: Rating | null;
  weight: number | null;
  network: Network | null;
  webChannel: string | null;
  dvdCountry: string | null;
  externals: Externals | null;
  image: Image | null;
  summary: string | null;
  updated: string | null;
  _links: _Links | null
};