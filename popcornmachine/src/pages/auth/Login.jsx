import { useContext, useRef, useState } from "react"
import {AuthContext} from './AuthContext'
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import {
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardHeader,
  MDBCol,
  MDBCardBody,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
  MDBTabsContent,
  MDBIcon,
  MDBCheckbox,
  MDBInput,
  MDBBtn,
  MDBTextArea,
} from 'mdb-react-ui-kit';



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

    <div>
    <MDBContainer fluid className='mt-5'>
      <section className='text-center text-lg-start'>
        <div className='container py-4'>
          <MDBRow className='g-0 align-items-center'>
            <MDBCol lg='6' className='mb-5 mb-lg-0'>
              <div
                className='card cascading-right'
                style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}
              >
                <div className='card-body p-5 shadow-5 text-center'>
                  <h2 className='fw-bold mb-5'>Sign up now</h2>
                  <form>
                    <MDBRow className='mb-4'>
                      <MDBCol>
                        <MDBInput className='mb-4' id='first2' label='First name' />
                      </MDBCol>
                      <MDBCol>
                        <MDBInput className='mb-4' id='last2' label='Last name' />
                      </MDBCol>
                    </MDBRow>

                    <MDBInput className='mb-4' type='email' id='email2' label='Email address' />
                    <MDBInput className='mb-4' type='password' id='password2' label='Password' />

                    <MDBRow className='mb-4 justify-content-center'>
                      <MDBCol md='6' className='d-flex justify-content-center'>
                        <MDBCheckbox className=' mb-3 mb-md-0' defaultChecked label=' Subscribe to our newsletter' />
                      </MDBCol>
                    </MDBRow>

                    <MDBBtn type='submit' block className='mb-4'>
                      Sign up
                    </MDBBtn>

                    <div className='text-center'>
                      <p>or sign up with:</p>
                      <MDBBtn color='link' type='button' floating className='mx-1'>
                        <MDBIcon fab icon='facebook-f' />
                      </MDBBtn>

                      <MDBBtn color='link' type='button' floating className='mx-1'>
                        <MDBIcon fab icon='google' />
                      </MDBBtn>

                      <MDBBtn color='link' type='button' floating className='mx-1'>
                        <MDBIcon fab icon='twitter' />
                      </MDBBtn>

                      <MDBBtn color='link' type='button' floating className='mx-1'>
                        <MDBIcon fab icon='github' />
                      </MDBBtn>
                    </div>
                  </form>
                </div>
              </div>
            </MDBCol>

            <MDBCol lg='6' className='mb-5 mb-lg-0'>
              <img
                src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg'
                className='w-100 rounded-4 shadow-4'
                alt=''
              />
            </MDBCol>
          </MDBRow>
        </div>
      </section>
    </MDBContainer>

    </div>

  )
}

export default Login
