import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import TermsAndConditions from '../TermsAndConditions';

export default function App() {
  return (
    <MDBFooter className='text-center text-white' style={{backgroundColor: 'rgb(1, 18, 36)' }}>
      <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>
            {/* <span className='me-3'>Open</span>
            <MDBBtn type='button' outline color="light" rounded>
              Sign up!
            </MDBBtn> */}
            <span><Link to="/t&c">Terms and conditions </Link></span>
          </p>
          
        </section>
        
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgb(1, 18, 36)' }}>
        © 2023 Copyright: videoarsenal.com
      </div>
    </MDBFooter>
  );
}