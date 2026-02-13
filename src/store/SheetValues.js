import { createSlice } from '@reduxjs/toolkit'

function createGrid(rows, cols) {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => '')
  )
}

function resizePreserveData(oldData, newRows, newCols) {
  const newGrid = createGrid(newRows, newCols)

  for (let r = 0; r < Math.min(oldData.length, newRows); r++) {
    for (let c = 0; c < Math.min(oldData[0].length, newCols); c++) {
      newGrid[r][c] = oldData[r][c]
    }
  }

  return newGrid
}

export const SheetValueSlice = createSlice({
  name: 'SheetValues',
  initialState: {
    rows: 100,
    cols: 100,
    data: createGrid(100, 100)
  },
  reducers: {
    setCell(state, action) {
      const { row, col, value } = action.payload
      state.data[row][col] = value
    },

    resizeGrid(state, action) {
      const { rows, cols } = action.payload

      state.data = resizePreserveData(state.data, rows, cols)

      state.rows = rows
      state.cols = cols
    }
  }
})

export const { setCell, resizeGrid } = SheetValueSlice.actions
export default SheetValueSlice.reducer
