import { createSlice } from '@reduxjs/toolkit'

const sheetDetailsSlice = createSlice({
  name: 'sheetdetails',
  initialState: {
    sheetName:'Sheet ',
    sheetNumber: 1
  },
  reducers: {
    incrementSheet(state) {
      state.sheetNumber += 1
    }
  }
})

export const { incrementSheet } = sheetDetailsSlice.actions
export default sheetDetailsSlice.reducer
