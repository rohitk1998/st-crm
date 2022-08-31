import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  islogin : false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isLogin: (state) => {
      state.islogin = true
    },
  },
})

// Action creators are generated for each case reducer function
export const { isLogin } = authSlice.actions

export default authSlice.reducer