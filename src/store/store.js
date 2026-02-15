import { configureStore } from '@reduxjs/toolkit'
import fileNameReducer from './FileName'
import sheetValueReducer from './SheetValues'
import sheetDetailsReducer from './SheetDetails'
export const store = configureStore({
  reducer: {
    fileName: fileNameReducer,
    sheetValue: sheetValueReducer,
    sheetDetails: sheetDetailsReducer,
  }
})
