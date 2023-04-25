import React from 'react'
import { useRef } from 'react';
import { useState, useEffect } from 'react'
import config from "../../data/config.json"

// https://karli-projekt-veebipood-2023-default-rtdb.europe-west1.firebasedatabase.app/

function MaintainCategories() {
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();

  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []));
  }, []);
  
  function add() {
    categories.push({"name": categoryRef.current.value});
    setCategories(categories.slice());
    fetch(config.categoriesDbUrl,
        {"method": "PUT" , "body" : JSON.stringify(categories)})

  }

  function deleteCategory(index) {
    // categories.push({"name": categoryRef.current.value});
    categories.splice(index,1);
    setCategories(categories.slice());
    categoryRef.current.value = "";
    fetch(config.categoriesDbUrl,  
      {"method": "PUT" , "body" : JSON.stringify(categories)})
  }

  return (
    <div>

    <label>Category</label> <br />
    <input ref={categoryRef} type="text" /><br />
    <button onClick={add}>Add</button><br />
{categories.map((e,index) =>
   <div>{e.name}
   <button onClick={() => deleteCategory(index)}>X</button>
   </div>)}

    </div>
  )
}

export default MaintainCategories
