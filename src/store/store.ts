import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "./features/auth"
import { searchSlice } from "./features/search"

export const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      search: searchSlice.reducer
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch