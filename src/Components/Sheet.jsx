import { useState, useRef, useEffect } from 'react'
import { getColumnName } from './SheetFunctions'
export default function Sheet() {
  const rows = 100
  const cols = 100


    const [colHeader, setColHeader] = useState([])
     const [data, setData] = useState(
    Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => '')
    )
    
  )
    const inputsRef = useRef([])

 useEffect(()=>{
     const headers = []
    for (let i = 1; i <= cols; i++) {
      headers.push(getColumnName(i))
    }
    setColHeader(headers)
 },[cols])
 



  function handleChange(r, c, value) {
    const newData = data.map(row => [...row])
    newData[r][c] = value
    setData(newData)
  }

  function handleKeyDown(e, r, c) {
    if (e.key === 'ArrowRight' && c < cols - 1)
      inputsRef.current[r][c + 1].focus()

    if (e.key === 'ArrowLeft' && c > 0)
      inputsRef.current[r][c - 1].focus()

    if (e.key === 'ArrowDown' && r < rows - 1)
      inputsRef.current[r + 1][c].focus()

    if (e.key === 'ArrowUp' && r > 0)
      inputsRef.current[r - 1][c].focus()
  }

  return (
    <div className="overflow-auto">
      <table className="border-collapse">
        <tbody>
          <>
         <tr>
  {colHeader.map((column, c) => (
    <td key={c}>{c==0?<></>:column}</td>
  ))}
</tr>

          {data.map((row, r) => (
           
          
            <tr key={r}>
                <td className="border">{r+1}</td>
              {row.map((cell, c) => (
                
                <td key={c} className="border">
                  <input
                    ref={el => {
                      if (!inputsRef.current[r]) {
                        inputsRef.current[r] = []
                      }
                      inputsRef.current[r][c] = el
                    }}
                    value={cell}
                    onChange={e =>
                      handleChange(r, c, e.target.value)
                    }
                    onKeyDown={e =>
                      handleKeyDown(e, r, c)
                    }
                    className="w-24 p-1 outline-none"
                  />
                </td>
                
              ))}
            </tr>

           
           
            
          ))}
          </>
        </tbody>
      </table>
    </div>
  )
}
