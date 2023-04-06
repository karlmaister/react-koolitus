import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json"
import { useRef } from 'react';

function MuudaToode() {
const {index} = useParams();
const leitud = tootedFailist[index];
const nimiRef = useRef();
const navigate = useNavigate();

function muuda() {
  tootedFailist[index] = nimiRef.current.value;
  navigate("/halda");
}

  return (
    <div>
      <label>Toote nimi</label> <br />
      <input type="text" ref={nimiRef} defaultValue={leitud}/> <br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  )
}

export default MuudaToode
