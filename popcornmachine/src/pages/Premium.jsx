import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Payment from './components/cart/Payment';
import OrderSummaryPopup from './components/OrderSummaryPopup';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Premium = () => {


  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
      ;
  }

  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const [selectedOptions, setSelectedOptions] = useState({
    format: '2D',
    logoDesign: false,
    footageLink: '',
    needVideographer: false,
    soundDesign: false,
    voiceOver: false,
    language: '',
  });

  const handleChange = (event, newFormat) => {
    const { name, value, type, checked } = event.target;
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [name]: type === 'checkbox' ? checked : value,
      format: newFormat,
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
    <div>
      
      <div className='register'>
        
        <div className='register-left'>
          <img src="https://www.arsenalproduction.house/img/logo.png" alt="arsenalvideo"></img>
          <h3>Welcome private partner!</h3>
          <p>Here you can combine your personalized video service package</p>
          <button className="scroll-button" onClick={handleScroll}>
            <div className="center-con">
              <div className="round">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

            </div>
          </button>
        </div>

        <div className='register-right'>
        
          <div className='register-form'>
          <div className='cart-container'>
              <h2 className='register-heading'>Total</h2>
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
              <p>Price: {getTotalPrice()} EUR</p>
              <div>

                <button className="button-explore" onClick={handlePopupOpen}>Confirm and Pay</button>
                {showPopup && (
                  <OrderSummaryPopup
                    selectedOptions={selectedOptions}
                    onClose={handlePopupClose}
                    getPrice={getPrice}
                    getTotalPrice={getTotalPrice}
                  />
                )}
              </div>
            </div>
            <div className='form-container'>
              <h2 className='register-heading'>Form</h2>
              <form onSubmit={handleFormSubmit}>
              <ToggleButtonGroup
      color="primary"
      value={selectedOptions.format}
      exclusive
      onChange={handleChange}
      aria-label="Format"
    >
      <ToggleButton value="" disabled>Select Animation</ToggleButton>
      <ToggleButton value="2D">2D</ToggleButton>
      <ToggleButton value="3D">3D</ToggleButton>
    </ToggleButtonGroup>
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
                  Language:
                  <select name="language" value={selectedOptions.language} onChange={handleChange}>
                    <option value="">Select Language</option>
                    <option value="est">Estonian</option>
                    <option value="eng">English</option>
                    <option value="rus">Russian</option>
                    <option value="lat">Latvian</option>
                    <option value="lit">Lithuanian</option>
                    <option value="jne">Other</option>
                  </select>
                </label>
                <br />
                <div class="form-outline">
                  <label class="form-label" for="textAreaExample">Tell us your vision in a simple 5 bulletpoint list!</label>
                  <textarea class="form-control" id="textAreaExample" rows="5" name="idea" onChange={handleChange}></textarea>

                </div>
                <Form.Group controlId="logo">
                  <IconButton color="primary" aria-label="upload picture" component="label">
                    <input hidden accept="image/*" type="file" />
                    Upload your logo here
                    <PhotoCamera />
                  </IconButton>
                </Form.Group>


              </form>

            </div>
          
           
          </div>
          
        </div>
        
      </div>
      
    </div>

  );
};

export default Premium;