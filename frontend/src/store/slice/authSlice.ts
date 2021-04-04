import { createSlice } from '@reduxjs/toolkit'
import { StoregeKey } from '../../config'
import { IUserState } from '../../types/types'
import { Storage } from '../../utils/utils'
// Define a type for the slice state

// Define the initial state using that type
const initialState: IUserState = {
  isLoading: false,
  userData: Storage.has(StoregeKey.USER) ? Storage.get(StoregeKey.USER) : {},
  error: {},
}

export const userAuthentication = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    USER_LOGOUT: (state) => {
      state.isLoading = false
      state.userData = {}
    },
    USER_REGISTER_REQUEST: (state) => {
      state.isLoading = true
    },
    USER_REGISTER_SUCCESS: (state, action) => {
      state.isLoading = false
      state.userData = action.payload
      delete state.error
    },
    USER_REGISTER_FAIL: (state, action) => {
      state.isLoading = false
      state.userData = {}
      state.error = action.payload
    },
    USER_LOGIN_REQUEST: (state) => {
      state.isLoading = true
    },
    USER_LOGIN_SUCCESS: (state, action) => {
      state.isLoading = false
      state.userData = action.payload
      delete state.error
    },
    USER_LOGIN_FAIL: (state, action) => {
      state.isLoading = false
      state.userData = {}
      state.error = action.payload
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
  },
})

export const {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
} = userAuthentication.actions

export default userAuthentication.reducer
