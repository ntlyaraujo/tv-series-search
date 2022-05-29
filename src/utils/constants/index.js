/* Devices Views **************** */
const size = {
    mobile: "280px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "2560px",
  };
  
  export const device = {
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
  };
  
  /* Links **************** */
  
  export const endpoints = {
    shows: {
      find: keyword => `/search/shows?q=${keyword}`,
    },
   }
  
  export const REQUEST = 'REQUEST';
  
  export const REQUEST_PENDING = 'REQUEST_PENDING';
  export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
  export const REQUEST_FAILED = 'REQUEST_FAILED';