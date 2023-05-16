import React from 'react'
import { useState, useEffect } from 'react'

function ParcelMachines() {
    
    const [parcelMachines, setParcelMachines] = useState([]);

  useEffect(() => {
    fetch('https://www.omniva.ee/locations.json')
      .then(response => response.json())
      .then(json => setParcelMachines(json))
  }, []);


  return (
    <div>
       <select style={{"font-size": "14px"}}>
    {parcelMachines
    .filter(element => element.NAME !== "1. eelistus Omnivas")
    .filter(element => element.A0_NAME === "EE")
    .map(element => <option key={element.NAME}> {element.NAME}</option>)}
    </select>
    </div>
  )
}

export default ParcelMachines
