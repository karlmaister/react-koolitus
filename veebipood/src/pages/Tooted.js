import React, { useState } from 'react'

function Tooted() {
const [tooted,uuendaTooted] = useState(["BMW","Tesla","MB"])

  return (
    <div>
      {tooted.map(toode => <div>{toode}</div>)}      
    </div>
  )
}

export default Tooted
