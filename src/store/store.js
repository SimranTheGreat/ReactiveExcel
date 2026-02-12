import { configureStore } from '@reduxjs/toolkit'
import fileNameReducer from './FileName'

export const store = configureStore({
  reducer: {
    fileName: fileNameReducer
  }
})
