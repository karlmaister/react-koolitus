import { useContext, useRef, useState } from "react"
import { AuthContext } from '../../store/AuthContext'
import { useNavigate } from "react-router-dom";


function Signup() {
  const url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDNXR4CB6rCoIa2BCpr0s9D96-iX0nnEag"
  const { setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [message, setMessage] = useState();

  const signup = () => {
    const payLoad = {
      "email": emailRef.current.value,
      "password": passwordRef.current.value,
      "returnSecureToken": true
    }

    fetch(url, { "method": "POST", "body": JSON.stringify(payLoad) })
      .then(res => res.json())
      .then(json => {

        if (json.error === undefined) {
          setLoggedIn(true);
          navigate("/admin");
          sessionStorage.setItem("id_token", json.idToken);
          sessionStorage.setItem("refresh_token", json.refreshToken);
        }
        else {
          setMessage(json.error.message);
        }
      });

  }




  return (
    <div>
      <div>{message}</div>
      <label>E-mail</label>
      <input ref={emailRef} type="text" />
      <br />
      <label>Password</label>
      <input ref={passwordRef} type="text" />
      <button onClick={signup}>Signup</button>
    </div>
  )
}

export default Signup
