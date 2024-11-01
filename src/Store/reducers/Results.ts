import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Results = {
  Movies: Movie[]
  totalPages: number
  page: number
}

const initialState: Results = {
  Movies: [],
  totalPages: 0,
  page: 1
}

const ResultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page += 1
    },
    previousPage: (state) => {
      state.page -= 1
    },
    chosenPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setResults: (
      state,
      action: PayloadAction<{ movies: Movie[]; totalPages: number }>
    ) => {
      state.Movies = action.payload.movies
      state.totalPages = action.payload.totalPages
      state.page = 1
    }
  }
})

export const { nextPage, previousPage, chosenPage, setResults } =
  ResultsSlice.actions
export default ResultsSlice.reducer
