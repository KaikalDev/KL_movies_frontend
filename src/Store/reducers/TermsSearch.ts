import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: SearchParams = {
  search: '',
  page: 1
}

const TermSearchSlice = createSlice({
  name: 'TermSearch',
  initialState,
  reducers: {
    SetTermSearch: (state, action: PayloadAction<SearchParams>) => {
      state.search = action.payload.search
      state.page = action.payload.page
      state.year = action.payload.year
    },
    chosenPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    }
  }
})

export const { SetTermSearch, chosenPage } = TermSearchSlice.actions
export default TermSearchSlice.reducer
