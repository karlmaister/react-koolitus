import React, { useState } from 'react'

function Avaleht() {

  const [klikitud, uuendaKlikitud] = useState("");

  const kuvaNimi = (tegelane) => {
    uuendaKlikitud(tegelane.VÕTI);
  } 

  
  

  const tegelased = [
    {VÕTI: "Mickey", VÕTI2: "Mouse", VÕTI3: "Disneyland"},
    {VÕTI: "Minnie", VÕTI2: "Mouse", VÕTI3: "Disneyland"},
    {VÕTI: "Winnie", VÕTI2: "Pooh", VÕTI3: "Hundred Acre Wood"},
    {VÕTI: "Roo", VÕTI2: "Kangaroo", VÕTI3: "Hundred Acre Wood"},
    {VÕTI: "Scooby", VÕTI2: "Doo", VÕTI3: "Crystal Cove"},
    ];

    
  return (
    <div>
      
{tegelased.map(tegelane => 
	<div>
		<div> {tegelane.VÕTI} <button onClick={() => kuvaNimi(tegelane)}>Ava nimi</button></div>
<div> {tegelane.VÕTI2} </div>
<div> {tegelane.VÕTI3} </div>
</div>)
}

{klikitud !== "" && <div>Klikkisid tegelase {klikitud}  peal</div>}

    </div>
  )
}

export default Avaleht
