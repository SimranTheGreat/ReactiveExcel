import { setFileName } from '../store/FileName'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useRef, useEffect } from 'react'
import logo from './../assets/logo.jpg'
export default function FileHeader() {
  const fileName = useSelector((state) => state.fileName.fileName)

  const dispatch = useDispatch()

  const [editing, setEditing] = useState(false)
  const [tempName, setTempName] = useState(fileName)

  const inputRef = useRef(null)

  useEffect(() => {
    if (editing) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [editing])

  useEffect(() => {
    setTempName(fileName)
  }, [fileName])

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      dispatch(setFileName({ fileName: tempName }))
      setEditing(false)
    }

    if (e.key === 'Escape') {
      setTempName(fileName)
      setEditing(false)
    }
  }

  return (
    <div className="flex items-center h-14 px-4 bg-white border-b border-gray-200">
      <img src={logo} alt="Logo" className="w-8 h-8 object-contain mr-3" />

      {!editing ? (
        <span
          onClick={() => setEditing(true)}
          className="
            text-lg
            font-medium
            text-gray-700
            px-2 py-1
            rounded
            cursor-text
            hover:bg-gray-100
            transition
          "
        >
          {fileName}
        </span>
      ) : (
        <input
          ref={inputRef}
          value={tempName}
          onChange={(e) => setTempName(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => setEditing(false)}
          className="
            text-lg
            font-medium
            text-gray-700
            px-2 py-1
            rounded
            border border-blue-500
            outline-none
          "
        />
      )}
    </div>
  )
}
