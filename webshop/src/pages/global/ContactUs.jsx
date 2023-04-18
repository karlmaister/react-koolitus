import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs.sendForm('service_3j24i3r', 'template_2etwsfj', form.current, 'ngFHr753Np5XpuB1p')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className="center" ref={form}>
      {/* <label>Name</label><br />
      <input type="text" name="from_name" /> <br /> */}
       <TextField name="from_name" label="Name" variant="outlined" /> <br />
       <TextField name="from_email" label="Email" variant="outlined" /> <br />
      <TextField name="message" label="Message" variant="outlined" /> <br />
      <Button variant="contained" onClick={sendEmail}>SEND</Button>
    </form>
  );
};