import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ISearch {
   search: string
}

const initialState: ISearch = {
   search: ''
}

export const searchSlice = createSlice({
   name: 'search',
   initialState,
   reducers: {
      setSearch: (state, action: PayloadAction<string>) => {
         state.search = action.payload
      }
   }
})

export const { setSearch } = searchSlice.actions
export const search = (state: RootState) => state.search.search
export default searchSlice.reducer