import { useState, useRef, useEffect } from 'react'
import { getColumnName } from './SheetFunctions'
import { useSelector } from 'react-redux'

export default function Sheet() {
  const rows = useSelector((state) => state.sheetValue.rows)
  const cols = useSelector((state) => state.sheetValue.cols)

  const [colHeader, setColHeader] = useState([])
  const inputsRef = useRef([])

  useEffect(() => {
    const headers = Array.from({ length: cols }, (_, i) => getColumnName(i + 1))
    setColHeader(headers)
  }, [cols])

  function handleKeyDown(e, r, c) {
    if (e.key === 'ArrowRight' && c < cols - 1)
      inputsRef.current[r]?.[c + 1]?.focus()

    if (e.key === 'ArrowLeft' && c > 0) inputsRef.current[r]?.[c - 1]?.focus()

    if (e.key === 'ArrowDown' && r < rows - 1)
      inputsRef.current[r + 1]?.[c]?.focus()

    if (e.key === 'ArrowUp' && r > 0) inputsRef.current[r - 1]?.[c]?.focus()
  }

  return (
    <div className="overflow-auto">
      <table className="border-collapse">
        <tbody>
          {/* Header Row */}
          <tr>
            <td className="border bg-gray-100 w-12"></td>
            {colHeader.map((column, c) => (
              <td
                key={c}
                className="border bg-gray-100 text-center font-medium"
              >
                {column}
              </td>
            ))}
          </tr>

          {/* Data Rows */}
          {Array.from({ length: rows }).map((_, r) => (
            <tr key={r}>
              <td className="border bg-gray-100 text-center w-12">{r + 1}</td>

              {Array.from({ length: cols }).map((_, c) => (
                <td key={c} className="border">
                  <input
                    ref={(el) => {
                      if (!inputsRef.current[r]) {
                        inputsRef.current[r] = []
                      }
                      inputsRef.current[r][c] = el
                    }}
                    defaultValue=""
                    onKeyDown={(e) => handleKeyDown(e, r, c)}
                    className="w-24 p-1 outline-none"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
