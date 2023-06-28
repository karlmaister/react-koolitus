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
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Footer from './components/Footer';
import { useNavigate } from 'react-router-dom';
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


const PrivateAccount = () => {


  const marks = [
    {
      value: 15,
      label: '15s',
    },
    {
      value: 30,
      label: '30s',
    },
    {
      value: 45,
      label: '45s',
    },
    {
      value: 60,
      label: '60s',
    },
    {
      value: 75,
      label: '75s',
    },
    {
      value: 100,
      label: '> 100s',
    },

  ];

  function valuetext(value) {
    return `${value}`;
  }

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
      ;
  }

  const navigate = useNavigate();

  const navigateToBusiness = () => {
    navigate("/business");
  }

  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const [selectedOptions, setSelectedOptions] = useState({
    format: 'MP4',
    logoDesign: false,
    footageLink: '',
    needVideographer: false,
    soundDesign: false,
    voiceOver: false,
    language: '',
    animation: '2D',
    voice: 'man',
    voiceStyle: '',
    videoLength: 60
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFormatChange = (event, newFormat) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      format: newFormat,
    }));
  };


  const handleChangeAnimation = (event, newAnimation) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      animation: newAnimation,
    }));
  };


  const handleLogoDesign = (event, newLogo) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      logoDesign: newLogo,
    }));
  };



  const handleVideographer = (event, needVideographerYes) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      needVideographer: needVideographerYes,
    }));
  };



  const handlesoundDesign = (event, needSoundDesign) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      soundDesign: needSoundDesign,
    }));
  };

  const handleVoiceOver = (event, needVoiceOver) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      voiceOver: needVoiceOver,
    }));
  };

  const handleVoice = (event, selectedVoice) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      voice: selectedVoice,
    }));
  };

  const handleVoiceStyle = (event, selectedVoiceStyle) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      voiceStyle: selectedVoiceStyle,
    }));
  };

  const handleVideoLength = (event, videoLengthSlider) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      videoLength: videoLengthSlider,
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
      case 15:
        return 75;
      case 30:
        return 105;
      case 45:
        return 125;
      case 60:
        return 155;
        case 75:
        return 185;
        case 90:
        return 235;
        case 100:
        return 300;
      default:
        return 0;
    }
  };

  const getTotalPrice = () => {
    let totalPrice = 0;

    if (selectedOptions.format) {
      totalPrice += getPrice(selectedOptions.format);
    }

    if (selectedOptions.animation) {
      totalPrice += getPrice(selectedOptions.animation);
    }
    if (selectedOptions.logoDesign) {
      totalPrice += getPrice('logoDesign');
    }

    if (selectedOptions.voiceOver) {
      totalPrice += getPrice('voiceOver');
    }

    if (selectedOptions.videoLength) {
      console.log(selectedOptions.videoLength)
      totalPrice += getPrice(selectedOptions.videoLength);
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

         <div className='register-welcome'>
         <h2>VideoArsenal - your partner in digital media!</h2>
          <p>Best quality video production money can buy</p>
          
            <div className='landingButtonForm'>
            <button className='landingButton' onClick={handleScroll}>Private customer</button> <br />
            <button className='landingButton' onClick={navigateToBusiness} >Business customer</button> <br />
            </div>
         </div>
          
          <iframe
            src="https://player.vimeo.com/video/121097470?h=e3506ba6f1?autoplay=1"
            title="How It Works Video"
            allow="autoplay; encrypted-media"
            webkitallowfullscreen=""
            mozallowfullscreen=""
            allowfullscreen=""
            data-ready="true"
          ></iframe>
        </div>

        

   

        <div className='register-right'>
          
          <div className='register-form'>

            <div className='form-container'>
              <h2 className='register-heading'>Combine your video here!</h2>
              <form onSubmit={handleFormSubmit}>
                <div class="form-outline">
                  <label class="form-label" for="textAreaExample">Tell us your vision in a simple 5 bulletpoint list!</label>
                  <textarea placeholder='Your company name and info about what you do?
                    What would you like to see in your video?
                    What is a must in your video?
                    What kind of colours you prefer?
                    Were will you be useing this video?'
                    class="form-control" id="textAreaExample" rows="5" name="idea" onChange={handleChange}></textarea>
                </div>
                <div className='format_select'>
                  <ToggleButtonGroup
                    color="primary"
                    value={selectedOptions.format}
                    exclusive
                    onChange={handleFormatChange}
                    name="format"
                    

                  >
                    <ToggleButton value="" disabled>Select Format</ToggleButton>
                    <ToggleButton value="MP4">MP4</ToggleButton>
                    <ToggleButton value="MOV">MOV</ToggleButton>
                    <ToggleButton value="WMV">WMV</ToggleButton>
                    <ToggleButton value="AVI">AVI</ToggleButton>
                    <ToggleButton value="AVCHD">AVCHD</ToggleButton>
                    <ToggleButton value="FLV, F4V, SWF">FLV, F4V, SWF</ToggleButton>
                    <ToggleButton value="MKV">MKV</ToggleButton>
                    <ToggleButton value="WEBM or HTML5">WEBM or HTML5</ToggleButton>
                    <ToggleButton value="MPEG-2">MPEG-2</ToggleButton>
                  </ToggleButtonGroup>
                </div>
                <div className='format_select_mobile'>
                  <select
                    color="primary"
                    value={selectedOptions.format}
                    exclusive
                    onChange={handleChange}
                    name="format"
                  >
                    <option value="">Select Language</option>
                    <option value="MP4">MP4</option>
                    <option value="MOV">MOV</option>
                    <option value="WMV">WMV</option>
                    <option value="AVCHD">AVCHD</option>
                    <option value="FLV, F4V, SWF">FLV, F4V, SWF</option>
                    <option value="WEBM or HTML5">WEBM or HTML5</option>
                    <option value="WEBM or HTML5">Other - please specify in idea box</option>
                  </select>

                </div>
                <ToggleButtonGroup
                  color="primary"
                  value={selectedOptions.animation}
                  exclusive
                  onChange={handleChangeAnimation}
                  name="animation"
                  aria-label="Animation"
                >
                  <ToggleButton value="" disabled>Select Animation</ToggleButton>
                  <ToggleButton value="2D">2D</ToggleButton>
                  <ToggleButton value="3D">3D</ToggleButton>
                </ToggleButtonGroup>

                <br />

                <Box sx={{ width: 300 }}> 
                  Video length
                  {/* {selectedOptions.videoLength > 99 && <><label>Custom time (sec)</label>
                  <input
                    type="number"
                    name="videoLength"
                    value={selectedOptions.videoLength}
                    onChange={handleChange}
                  /></>} */}
                  <Slider
                    aria-label="Always visible"
                    defaultValue={60}
                    getAriaValueText={valuetext}
                    step={15}
                    marks={marks}
                    valueLabelDisplay="on"
                    name='videoLength'
                    onChange={handleVideoLength}
                    
                  />
                  
                </Box>
                
                    <MDBInput className='mb-4' id='last2' placeholder='Add your footage/material link'
                    name="footageLink"
                    value={selectedOptions.footageLink}
                    onChange={handleChange}/>
                
                  <MDBInput className='mb-4'
                  placeholder='Add your font link'
                    type="text"
                    name="fontLink"
                    value={selectedOptions.fontLink}
                    onChange={handleChange}
                  />
                
                <ToggleButtonGroup
                  color="primary"
                  value={selectedOptions.logoDesign}
                  exclusive
                  onChange={handleLogoDesign}
                  name="logoDesign"
                  aria-label="logoDesign"
                  defaultValue={true}
                >
                  <ToggleButton value="" disabled>logoDesign</ToggleButton>
                  <ToggleButton value={true}>YES</ToggleButton>
                  <ToggleButton value={false}>NO</ToggleButton>
                  </ToggleButtonGroup>
                {selectedOptions.logoDesign === false &&  <IconButton color="primary" aria-label="upload picture" component="label" sx={{ width: 300 }}>
                    <input hidden accept="image/*" type="file" />
                    UPLOAD YOUR LOGO
                    <PhotoCamera />
                  </IconButton>}
                



                <Form.Group className="mb-3" controlId="needVideographer">
                  <ToggleButtonGroup
                    type="checkbox"
                    name="needVideographer"
                    exclusive
                    value={selectedOptions.needVideographer}
                    onChange={handleVideographer}
                    aria-label="needVideographer"
                    color="primary"
                  >
                    <ToggleButton
                      id="needVideographer-toggle"
                      disabled > Need a videographer?
                    </ToggleButton>
                    <ToggleButton value={true}>YES</ToggleButton>
                    <ToggleButton value={false}>NO</ToggleButton>
                  </ToggleButtonGroup>
                </Form.Group>


                <Form.Group className="mb-3" controlId="soundDesign">
                  <ToggleButtonGroup
                    type="checkbox"
                    name="soundDesign"
                    exclusive
                    value={selectedOptions.soundDesign}
                    onChange={handlesoundDesign}
                    aria-label="soundDesign"
                    color="primary"
                  >
                    <ToggleButton
                      id="soundDesign-toggle"
                      disabled > Need a sound design?
                    </ToggleButton>
                    <ToggleButton value={true}>YES</ToggleButton>
                    <ToggleButton value={false}>NO</ToggleButton>
                  </ToggleButtonGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="voiceOver">
                  <ToggleButtonGroup
                    type="checkbox"
                    name="voiceOver"
                    value={selectedOptions.voiceOver}
                    onChange={handleVoiceOver}
                    color="primary"
                    exclusive
                  >
                    <ToggleButton
                      id="voiceOver-toggle"
                      disabled
                    >
                      Voice Over
                    </ToggleButton>
                    <ToggleButton
                      id="voiceOver-toggle"
                      value={true}>
                      Yes
                    </ToggleButton>
                    <ToggleButton
                      id="voiceOver-toggle"
                      value={false}>
                      No
                    </ToggleButton>
                  </ToggleButtonGroup>


                  {selectedOptions.voiceOver === true && <div>
                    <ToggleButtonGroup
                      color="primary"
                      value={selectedOptions.voice}
                      onChange={handleVoice}
                      name="voice"
                      exclusive
                    >
                      <ToggleButton value="man">Man</ToggleButton>
                      <ToggleButton value="woman">Woman</ToggleButton>
                    </ToggleButtonGroup>


                    <ToggleButtonGroup
                      color="primary"
                      value={selectedOptions.voiceStyle}
                      exclusive
                      onChange={handleVoiceStyle}
                      name="voiceStyle"
                      aria-label="voiceStyle"
                    >
                      <ToggleButton value="old">Older</ToggleButton>
                      <ToggleButton value="young">Younger</ToggleButton>
                      <ToggleButton value="child">Child</ToggleButton>
                    </ToggleButtonGroup>


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
                  </div>}
                </Form.Group>
                <br />
              </form>

            </div>

            <div className='cart-container'>
              <h2 className='register-heading'>Total</h2>
              <p>Selected Options:</p>
              <ul>
                {selectedOptions.format && (
                  <li> Format {selectedOptions.format} - {getPrice(selectedOptions.format)} EUR</li>
                )}{selectedOptions.animation && (
                  <>
                    <li> Animation {selectedOptions.animation} - {getPrice(selectedOptions.animation)} EUR</li>
                    <li> Video length {selectedOptions.videoLength} sek - {getPrice(selectedOptions.videoLength)} EUR</li>
                  </>
                )}
                {selectedOptions.logoDesign && <li>Logo Design {getPrice('logoDesign')} EUR</li>}
                {selectedOptions.footageLink && (
                  <li>Footage Link: {selectedOptions.footageLink}</li>
                )}
                {selectedOptions.needVideographer && <li>Need a Videographer {getPrice('needVideographer')} EUR</li>}
                {selectedOptions.soundDesign && <li>Sound Design {getPrice('soundDesign')} EUR</li>}
                {selectedOptions.voiceOver &&
                  <>
                    <li>Voice Over {getPrice('voiceOver')} EUR</li>
                    <li>Voice: {selectedOptions.voice}</li>
                    <li>Voice Style: {selectedOptions.voiceStyle}</li>
                  </>
                }
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
                    cart_sum={getTotalPrice}
                  />
                )}
              </div>
            </div>
          </div>

        </div>

      </div>


    </div>

  );
};

export default PrivateAccount;