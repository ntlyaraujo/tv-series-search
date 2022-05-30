/* Devices Views **************** */
const size = {
  mobile: "280px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "2560px",
};

export const device = {
  fold: `(max-width: ${size.mobile})`,
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

/* Links **************** */

export const endpoints = {
  shows: {
    find: (keyword: string) => `/search/shows?q=${keyword}`,
    findById: (id: number) => `/shows/${id}`,
  },
};

export const emptyShow = {
  show: {
    id: 0,
    url: null,
    name: null,
    type: null,
    language: null,
    genres: [],
    status: null,
    runtime: 0,
    averageRuntime: 0,
    premiered: null,
    ended: null,
    officialSite: null,
    schedule: null,
    rating: null,
    weight: 0,
    network: null,
    webChannel: null,
    dvdCountry: null,
    externals: null,
    image: null,
    summary: null,
    updated: null,
    _links: null,
  },
};
