import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'
import resultsReducer from './reducers/Results'
import termsSearchReducer from './reducers/TermsSearch'

export const Store = configureStore({
  reducer: {
    results: resultsReducer,
    termsSearch: termsSearchReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type Rootreducer = ReturnType<typeof Store.getState>
