import { useContext, useRef, useState } from "react"
import {AuthContext} from './AuthContext'
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';



function Login() {
    const {setLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [message, setMessage] = useState();

    const login = () => {
        if (passwordRef.current.value === "123") {
        setLoggedIn(true);
        navigate("/admin");
        sessionStorage.setItem("token", "suvaline");
        }
        else {
            setMessage("Password not correct");
        }
    }


  return (
    <div className="form-login">
   
      <Box  component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
      <div>{message}</div>
        <TextField id="outlined-basic" label="E-mail" variant="outlined" >
        <input ref={emailRef} type="text" />
        <br />
        </TextField>
        <br />
        <TextField id="outlined-basic" label="Parool" variant="outlined" >
        <input ref={passwordRef} type="text" />
        </TextField>
      <br />
      <Button variant="contained" endIcon={<SendIcon />} onClick={login}>Logi sisse</Button>
      </Box>

    </div>
  )
}

export default Login
