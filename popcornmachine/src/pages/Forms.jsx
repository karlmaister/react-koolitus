import React, { useState, useRef } from 'react';
import { Form } from 'react-bootstrap';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';

const MarketingIdeaForm = (onClose) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = (e) => {

    const data = {
      "client_name": nameRef.current.value,
      "client_email": emailRef.current.value,
      "message": messageRef.current.value,
    }
    on

    emailjs.send('service_ew78t4p', 'template_d2a8yfi', data, 'BzlVLHD4O0_feXKUB')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };



  return (
    <div>
      
      <Form onSubmit={sendEmail} className="form-forms">
        <Form.Group controlId="name">
          <TextField inputRef={nameRef} id="outlined-basic" label="Enter name"variant="outlined" >
          <Form.Control
            type="text"
            placeholder="Sisestage oma nimi"
            required
          />
          </TextField>
        </Form.Group>

        <Form.Group controlId="email">
          <TextField inputRef={emailRef} id="outlined-basic" label="Enter e-mail"variant="outlined" >
          <Form.Control
            type="email"
            placeholder="Sisestage oma e-posti aadress"
            required
          />
          </TextField>
        </Form.Group>

        <Form.Group controlId="idea">

          <TextField inputRef={messageRef} id="outlined-basic" label="Ideas and preferred consultation time" variant="outlined" >
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Ideas and preferred consultation time"
            required
          />
          </TextField>
        </Form.Group>


        <Button variant="outlined" type="submit">
          SEND
        </Button>
      </Form>
    </div>
  );
}

export default MarketingIdeaForm;
