import React from 'react'
import { useRef } from 'react';
import { useState, useEffect } from 'react'
import config from "../../data/config.json"

function MaintainShops() {
const [shops, setShops] = useState([]);
const shopRef = useRef();

useEffect(() => {
  fetch(config.shopsDbUrl)
    .then(res => res.json())
    .then(json => setShops(json || []));
}, []);

function add() {
  shops.push({ "name": shopRef.current.value });
  setShops(shops.slice());
  fetch(config.shopsDbUrl,
    { "method": "PUT", "body": JSON.stringify(shops) })

}

function deleteShop(index) {
  shops.splice(index, 1);
  setShops(shops.slice());
  shopRef.current.value = "";
  fetch(config.shopsDbUrl,
    { "method": "PUT", "body": JSON.stringify(shops) })
}


return (

  <div>

    <label>Shop name</label> <br />
    <input ref={shopRef} type="text" /><br />
    <button onClick={add}>Add</button><br />
    {shops.map((e, index) =>
      <div>{e.name}
        <button onClick={() => deleteShop(index)}>X</button>
      </div>)}

  </div>
)
}

export default MaintainShops



