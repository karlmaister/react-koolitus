import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Payment from './components/cart/Payment';

const Premium = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    format: '',
    logoDesign: false,
    footageLink: '',
    needVideographer: false,
    soundDesign: false,
    voiceOver: false,
    language: '',
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const getPrice = (option) => {
    switch (option) {
      case '3D':
        return 150;
      case 'soundDesign':
      case 'voiceOver':
      case 'needVideographer':
      case '2D':
      case 'logoDesign':
        return 50;
      default:
        return 0;
    }
  };

  const getTotalPrice = () => {
    let totalPrice = 0;

    if (selectedOptions.format) {
      totalPrice += getPrice(selectedOptions.format);
    }

    if (selectedOptions.logoDesign) {
      totalPrice += getPrice('logoDesign');
    }

    if (selectedOptions.voiceOver) {
      totalPrice += getPrice('voiceOver');
    }

    if (selectedOptions.soundDesign) {
      totalPrice += getPrice('soundDesign');
    }

    if (selectedOptions.needVideographer) {
      totalPrice += getPrice('needVideographer');
    }

    return totalPrice;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Code to send the form via email
    // You can use an API or a server-side function to handle the email sending process
    // Example: sendEmail(formData);
  };

  return (
 <div className='form-container'>
     <div>
      <h2>Form</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Format:
          <select name="format" value={selectedOptions.format} onChange={handleChange}>
            <option value="">Select Format</option>
            <option value="2D">2D</option>
            <option value="3D">3D</option>
          </select>

        </label>
        <br />
        <label>
          Logo Design:
          <input
            type="checkbox"
            name="logoDesign"
            checked={selectedOptions.logoDesign}
            onChange={handleChange}
          />

        </label>


        <br />
        <label>
          Add Own Footage/Link:
          <input
            type="text"
            name="footageLink"
            value={selectedOptions.footageLink}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Need a Videographer:
          <input
            type="checkbox"
            name="needVideographer"
            checked={selectedOptions.needVideographer}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Sound Design:
          <input
            type="checkbox"
            name="soundDesign"
            checked={selectedOptions.soundDesign}
            onChange={handleChange}
          />

        </label>
        <br />
        <label>
          Voice Over:
          <input
            type="checkbox"
            name="voiceOver"
            checked={selectedOptions.voiceOver}
            onChange={handleChange}
          />

        </label>
<br />
        <label>
          Language
          :
          <select name="language" value={selectedOptions.language} onChange={handleChange}>
            <option value="">Select Language</option>
            <option value="est">Estonian</option>
            <option value="eng">English</option>
            <option value="rus">Russian</option>
            <option value="lat">Latvian</option>
            <option value="lit">Lithuanian</option>
            <option value="jne">Other</option>
          </select>
        </label> <br />
        <TextField id="outlined-basic" label="Tell us your vision:" variant="outlined" >
          <input
            type="text"
            name="idea"
            onChange={handleChange}
          />
        </TextField>

        <Form.Group controlId="logo">
        <IconButton color="primary" aria-label="upload picture" component="label">
  <input hidden accept="image/*" type="file" />
  Upload
  <PhotoCamera />
</IconButton>
        </Form.Group>


        <Button type="submit">Submit</Button>
      </form>

      <div className='cart-container'>
        <h2>Cart</h2>
        <p>Selected Options:</p>
        <ul>
          {selectedOptions.format && (
            <li> Format {selectedOptions.format} - {getPrice(selectedOptions.format)} EUR</li>
          )}
          {selectedOptions.logoDesign && <li>Logo Design {getPrice('logoDesign')} EUR</li>}
          {selectedOptions.footageLink && (
            <li>Footage Link: {selectedOptions.footageLink}</li>
          )}
          {selectedOptions.needVideographer && <li>Need a Videographer {getPrice('needVideographer')} EUR</li>}
          {selectedOptions.soundDesign && <li>Sound Design {getPrice('soundDesign')} EUR</li>}
          {selectedOptions.voiceOver && <li>Voice Over {getPrice('voiceOver')} EUR</li>}
          {selectedOptions.language && <li>Language: {selectedOptions.language}</li>}
        </ul>
        <p>Total Price: {getTotalPrice()} EUR</p>
        <Payment sum={getTotalPrice()} />
      </div>
    </div>
    
 </div>
 
  );
};

export default Premium;