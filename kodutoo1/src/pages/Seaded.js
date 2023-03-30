import React from 'react'
import { useState } from 'react'

function Seaded() {
  const[mode, muudaMode] = useState(localStorage.getItem("mode"))

  const Darkmode = () => {
    muudaMode("dark")
    localStorage.setItem("mode","dark");
    
  }

  const Lightmode = () => {
    muudaMode("light")
    localStorage.setItem("mode","light")
  }

  const Rainbowmode = () => {
    muudaMode("rainbow")
    localStorage.setItem("mode","rainbow")
  }


  return (
    <div>
      {mode==="light" && <button onClick={Darkmode}>Dark mode</button>}
      {mode ==="dark" && <button onClick={Lightmode}>Light mode</button>}
      {mode ==="dark" && <button onClick={Rainbowmode}>Rainbow mode</button>}
    </div>
  )
}

export default Seaded
