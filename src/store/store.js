import { configureStore } from '@reduxjs/toolkit'
import fileNameReducer from './FileName'
import sheetValueReducer from './SheetValues'

export const store = configureStore({
  reducer: {
    fileName: fileNameReducer,
    sheetValue: sheetValueReducer
  }
})
