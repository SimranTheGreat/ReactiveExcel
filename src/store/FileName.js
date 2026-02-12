import { createSlice } from '@reduxjs/toolkit'

const fileNameSlice = createSlice({
  name: 'fileName',
  initialState: {
    fileName: 'Untitled Spreadsheet',
    timeStamp: Date.now()
  },
  reducers: {
    setFileName(state, action) {
      state.fileName = action.payload.fileName
    },
    setTime(state, action) {
      state.timeStamp = action.payload.timeStamp
    }
  }
})

export const { setFileName, setTime } = fileNameSlice.actions

export default fileNameSlice.reducer
