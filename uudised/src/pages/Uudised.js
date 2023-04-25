import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function Uudised() {

  
  const [uudised, muudaUudised] = useState(JSON.parse(localStorage.getItem("uudised")) || []);


  return (
    <div>
      <div>Siin on viimased uudised</div>
      <div>
        {uudised.map((uudis,index) =>
        <div>
          <Link to={"/uudis/"+index}><div>{uudis}</div></Link>
          </div>
        ) }
        <div>{uudised.length}</div>
      </div>

    </div>
  )
}

export default Uudised
