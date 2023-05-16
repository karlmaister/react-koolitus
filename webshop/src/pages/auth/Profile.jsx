import React, { useContext, useRef } from 'react'
import { AuthContext } from '../../store/AuthContext';

function Profile() {

    const nameRef = useRef();
    const urlRef = useRef();
    const {loggedInUser} = useContext(AuthContext)
    const url="https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDNXR4CB6rCoIa2BCpr0s9D96-iX0nnEag";

    const changeProfile = () => {
        const payLoad = {
            "idToken": sessionStorage.getItem("id_token"),
            "displayName": nameRef.current.value,
            "photoUrl": urlRef.current.value,
            "returnSecureToken": false
        }
        fetch(url, {"method": "POST", "body": JSON.stringify(payLoad)})
        .then(res => res.json())
        .then(json => console.log(json));

    }
  return (
    <div>
     {loggedInUser.users !== undefined &&
     <div>
      <label>Display name</label><br />
      <input type="text" ref={nameRef} defaultValue={loggedInUser.users[0].displayName}/> <br />
      <label>Photo url</label><br />
      <input type="text"  ref={urlRef} defaultValue={loggedInUser.users[0].photoUrl}/><br />
      <button onClick={changeProfile}>Change</button>
      </div>
}

    </div>
  )
}

export default Profile
