import { incrementSheet } from "../store/SheetDetails"
import { useState, useRef, useEffect } from 'react'
import { getColumnName } from './SheetFunctions'
import { useSelector } from 'react-redux'

export default function Footer() {
  const sheetnum=useSelector(state.sheetDetails.sheetNumber)
  const [sheetArr,setSheetArr]=useState([])
  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center gap-2 px-4 py-2 border-t bg-gray-100">
      <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-200">
        +
      </button>


      <div className="px-4 py-1 bg-white border border-b-0 rounded-t font-medium shadow-sm">
        Sheet1
      </div>
    </div>
  )
}
