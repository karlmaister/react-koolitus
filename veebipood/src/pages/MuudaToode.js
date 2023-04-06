import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json"
import { useRef } from 'react';

function MuudaToode() {
const {index} = useParams();
const leitud = tootedFailist[index];
const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();
const navigate = useNavigate();

function muuda() {
  const uuendatudToode = {
    "nimi": nimiRef.current.value,
    "hind": Number(hindRef.current.value),
    "pilt": piltRef.current.value,
    "aktiivne": aktiivneRef.current.checked
  }
  tootedFailist[index] = uuendatudToode;
  navigate("/halda");
}

  return (
    <div>
      <label>Toote nimi</label> <br />
      <input type="text" ref={nimiRef} defaultValue={leitud.nimi}/> <br />
      <label>Toote hind</label> <br />
      <input type="number" ref={hindRef} defaultValue={leitud.hind}/> <br />
      <label>Toote pilt</label> <br />
      <input type="text" ref={piltRef} defaultValue={leitud.pilt}/> <br />
      <label>Toote aktiivsus</label> <br />
      <input type="checkbox" ref={aktiivneRef} defaultChecked={leitud.aktiivne}/> <br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  )
}

export default MuudaToode
