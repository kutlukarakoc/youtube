import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"

interface IUser {
   user: {
      providerId?: string
      uid?: string
      displayName?: string
      email?: string
      phoneNumber?: any
      photoURL?: string
   }
}

const initialState: IUser = {
   user: JSON.parse(`${localStorage.getItem('user')}`) ?? {}
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      login: (state, action: PayloadAction<any>) => {
         localStorage.setItem('user', JSON.stringify(action.payload))
         state.user = action.payload
      },

      logout: (state) => {
         localStorage.removeItem('user')
         state.user = {}
      }
   }
})

export const { login, logout } = authSlice.actions
export const auth = (state: RootState) => state.auth.user
export default authSlice.reducer