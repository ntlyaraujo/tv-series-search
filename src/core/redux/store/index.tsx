import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

// configureStore automatically sets up the store with good default settings
export default configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
