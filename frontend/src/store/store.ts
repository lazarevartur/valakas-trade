import { configureStore } from '@reduxjs/toolkit'

import { counterSlice } from '../store/slice/authSlice'

export default configureStore({
  reducer: { count: counterSlice.reducer },
})
