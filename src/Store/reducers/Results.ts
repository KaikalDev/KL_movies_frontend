import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Results = {
  Movies: Movie[]
  totalPages: number
  page: number
  active?: Movie
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
    setResults: (
      state,
      action: PayloadAction<{ movies: Movie[]; totalPages: number }>
    ) => {
      state.Movies = action.payload.movies
      state.totalPages = action.payload.totalPages
      state.page = 1
    },
    setMovieActive: (state, action: PayloadAction<Movie>) => {
      state.active = action.payload
    }
  }
})

export const { setResults, setMovieActive } = ResultsSlice.actions
export default ResultsSlice.reducer
