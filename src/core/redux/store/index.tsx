import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import {showsReducer} from 'core/redux/reducers/shows-reducer'
import { showDetailsReducer } from 'core/redux/reducers/show-details-reducer'

// configureStore automatically sets up the store with good default settings
export default configureStore({
  reducer: {
    shows:showsReducer,
    show:showDetailsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
