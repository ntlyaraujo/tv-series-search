import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import {showsReducer} from '../reducers'

// configureStore automatically sets up the store with good default settings
export default configureStore({
  reducer: {
    shows:showsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
